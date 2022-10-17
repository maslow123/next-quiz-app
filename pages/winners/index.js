import { useRouter } from "next/router";
import { Layout } from "../../components/common";

function Winners(props) {
    const router = useRouter();
    const winnerList = [
        {
            name: 'KUCING',
            score: 110,
            time: '03:28 detik'
        },
        {
            name: 'SERIGALA',
            score: 110,
            time: '03:45 detik'
        },
        {
            name: 'BERUANG',
            score: 110,
            time: '06:25 detik'
        },
        {
            name: 'KUPU-KUPU',
            score: 100,
            time: '06:49 detik'
        },
    ];

    return (
        <Layout 
            style={{ backgroundImage: 'linear-gradient(180deg, #9A021F, #FB8C23)', color: 'white'}}
        >
            <div className={`d-flex align-items-center flex-column justify-content-center`}>
                <div className="title mb-3">
                    <label style={{ fontSize: 50, fontWeight: 'normal'}}>SELAMAT KEPADA PEMENANG</label><br/>                                        
                </div>                
                <table className="table table-bordered text-center" style={{ color: 'white'}}>
                    <thead style={{ background: '#666', fontSize: 24}}>
                        <tr>
                            <th>Nama Kelompok</th>
                            <th>Nilai</th>
                            <th>Waktu</th>
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: 22 }} >                        
                        {winnerList.map((wl, key) => (
                            <tr key={key} style={{ fontWeight: 'normal', background: key === 0 && 'green'}}>
                                <td>{wl.name}</td>
                                <td>{wl.score}</td>
                                <td>{wl.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="footer">
                    <button 
                        className="btn btn-primary rounded mt-3"
                        onClick={() => router.push('/landing')}
                    >
                        Home
                    </button>
                </div>
            </div>
        </Layout>
    )
}

export default Winners;