import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import NftGallery from "../components/nftsGallery"
import TokenBalancesPanel from "../components/tokensBalanceDisplay"
export default function Home() {
  return (
    <div>

      <main className={styles.main}>
      {/* <InstructionsComponent></InstructionsComponent> */}
      {/* <TokenBalancesPanel walletAddress={"t8840.eth"} /> */}
        <NftGallery walletAddress={"t8840.eth"} />
       
      </main> 
      
    </div>
    
  );
}
