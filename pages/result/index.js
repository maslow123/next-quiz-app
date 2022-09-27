import { Layout } from "../../components/common";
import { useAuth } from "../../context/auth";
import Image from "next/image";
import { images } from "../../utils";

function Result() {
    const ctx = useAuth();
    console.log(ctx);
    return (
        <Layout 
            style={{ backgroundImage: 'linear-gradient(180deg, #9A021F, #FB8C23)', color: 'white'}}
        >
            <div className={`d-flex align-items-center flex-column justify-content-center`}>
                <div className="title">
                    <label style={{ fontSize: 15, fontWeight: 'normal'}}>Selamat untuk kelompok:</label><br/>                                        
                </div>                
                <span className="bold h1 text-uppercase">Biri biri</span>
                <div 
                    className="mt-4 bg-info text-uppercase d-flex align-items-center justify-content-center"
                    style={{ width: 170, height: 50, borderRadius: 40 }}
                >
                    <label>Total Nilai</label>                    
                </div>
                <div className="mt-4 text-uppercase d-flex align-items-center justify-content-center">
                    <label style={{ fontSize: 100}}>0</label>                    
                </div>
                <div>
                    <Image
                        alt="login"
                        src={images.result}
                        quality={100}
                        layout="intrinsic"
                        width={300}
                        height={300}
                    />
                </div>
                <div className="captions h3">
                    <span>Kamu menyelesaikan permainan ini dalam waktu <span className="bold text-italic">5:10</span> menit.</span>                    
                </div>
                <div className="captions h3">
                    <span>Jangan lupa untuk kasih tau ke kaka pendampingmu ya</span>
                </div>
            </div>            
        </Layout>
    )
}

export default Result;