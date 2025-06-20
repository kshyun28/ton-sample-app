import { Telegraf } from "telegraf";
import { beginCell, toNano } from "@ton/core";
import qs from "qs";
import dotenv from "dotenv"
dotenv.config();

const bot = new Telegraf(process.env.TG_BOT_TOKEN!);
const contractAddress = process.env.CONTRACT_ADDRESS!;

bot.start((ctx) =>
  ctx. reply ("Welcome to our TON sample app!", {
    reply_markup: {
      keyboard: [
        ["Increment by 5"],
        ["Deposit 1 TON"],
        ["Withdraw 0.7 TON"],
      ],
    },
  })
);

bot.hears("Increment by 5", (ctx) => {
  const msgBody = beginCell()
    .storeUint(1, 32)
    .storeUint(5, 32)
    .endCell();

  let link = `https://test.tonhub.com/transfer/${
    contractAddress
  }?${qs.stringify(
    {
      text: "Increment counter by 5",
      amount: toNano("0.05").toString(10),
      bin: msgBody.toBoc({ idx: false }).toString("base64"),
  })}`;

  ctx.reply("To increment counter by 5, please sign a transaction:", {
    reply_markup: {
      inline_keyboard: [
        [
          { 
            text: "Sign transaction", 
            url: link 
          }
        ],
      ],
    },
  });
});

bot.hears("Deposit 1 TON", (ctx) => {
  // TODO: send deposit transaction
  ctx.reply("Deposited 1 TON");
});

bot.hears ("Withdraw 0.7 TON", (ctx) => {
  // TODO: send withdraw transaction
  ctx.reply("Withdrawn 0.7 TON");
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop ("SIGTERM"));