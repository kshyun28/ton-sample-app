import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const {
    contract_address,
    counter_value,
    // recent_sender,
    // owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest,
  } = useMainContract();

  const { connected } = useTonConnect();

  return (
    <div>
      <div className="button-container">
        <TonConnectButton />
      </div>
      <br />
      <div>
        <div className='Card'>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>

          <br />

          <b>Our contract Balance</b>
          {contract_balance && (
            <div className='Hint'>{contract_balance}</div>
          )}

          <br />

          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>

        <br />

        {connected && (
          <a 
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment by 5
          </a>
        )}

        <br />

        {connected && (
          <a 
            onClick={() => {
              sendDeposit();
            }}
          >
            Request deposit of 1 TON
          </a>
        )}

        <br />

        {connected && (
          <a 
            onClick={() => {
              sendWithdrawalRequest();
            }}
          >
            Request 0.7 TON withdrawal
          </a>
        )}
      </div>
    </div>
  );
}

export default App;