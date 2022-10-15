import Image from "next/image";
import { useRouter } from "next/router";
import { Layout } from "../../components/common";
import { images, myLoader } from "../../utils";

function AboutUs(props) {
    const router = useRouter();
    const leadership = [
        {
            photo: images.org.dospem,
            name: 'HIDAYATULLAH AL ISLAMI M.Kom S.Kom',
            role: 'Dospem'
        },
        {
            photo: images.org.hanifudin,
            name: 'Rizky Hanifudin',
            role: '201011400105'
        },
    ]
    const organizations = [
        {
            photo: images.org.fadhly,
            name: 'M Fadhly Noor Rizqi',
            role: '201011400094'
        },                                
        {
            photo: images.org.putri,
            name: 'Putri Rokhmayati',
            role: '201011400293'
        },
        {
            photo: images.org.iqbalsyah,
            name: 'Iqbalsyah Khatami',
            role: '201011401525'
        },
        {
            photo: images.org.andini,
            name: 'Andini Gustiani',
            role: '201011401415'
        },                                
        {
            photo: images.org.rizky_destyan,
            name: 'Rizky Destyan Pulunggono',
            role: '201011401750'
        },
        {
            photo: images.org.salwa,
            name: 'Salwa Carelina Maybrella',
            role: '201011401674'
        },
        {
            photo: images.org.satria,
            name: 'Satria Banistama',
            role: '201011401178'
        },
        {
            photo: images.org.tritiya,
            name: 'Tritya Adi Dharma',
            role: '201011401343'
        },
        {
            photo: images.org.wardah,
            name: 'Wardah Oktafiani',
            role: '201011400098'
        }
    ];


    return (
        <Layout>
            <div className="pb-3" onClick={() => router.back()} style={{ cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
            <div className="header row gx-5">
                <div className="col-md-8">
                    <div className="heading fs-2 fw-bold lh-sm">
                        <label>Perkenalkan, kami mahasiswa Universitas Pamulang yang terdiri dari <span className="fst-italic fw-normal">kreator, desainer, videographer, </span> dan <span className="fst-italic fw-normal">problem solvers</span></label>
                    </div>
                    <div className="sub-heading pt-4">
                        <label>
                            Kami memiliki misi untuk memberi pelajaran terkhusus anak-anak di bawah umur untuk memperkenalkan teknologi melalui aplikasi permainan tebak gambar.
                        </label>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <Image
                        className="thumbnail"
                        alt="thumbnail"
                        loader={myLoader}
                        src={images.logo}
                        quality={100}
                        layout="intrinsic"
                        width={300}
                        height={300}
                    />
                </div>
            </div>

            {
                leadership.map((lead, key) => (
                    <div className="row mt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 mb-4">
                            <div className="card border-0" style={{ width: '18rem'}}>             
                                <Image
                                    className="thumbnail"
                                    alt="thumbnail"
                                    loader={myLoader}
                                    src={lead.photo}
                                    quality={100}
                                    layout="intrinsic"
                                    width={200}
                                    height={300}
                                />
                                <div className="pt-4" style={{ lineHeight: 0 }}>
                                    <h5 className="fs-4 card-title fw-bold">{lead.name}</h5>
                                    <p className="fs-7 card-text fst-italic">{lead.role}</p>
                                </div>
                            </div>
                        </div>                
                        <div className="col-md-4"></div>
                        
                    </div>
                ))
            }
            
            <div className="content row">
                {organizations.map((org, key) => (
                    <div className="col-md-4 mt-4" key={key}>
                        <div className="card border-0" style={{ width: '18rem' }}>
                            <Image
                                className="thumbnail"
                                alt="thumbnail"
                                loader={myLoader}
                                src={org.photo}
                                quality={100}
                                layout="intrinsic"
                                width={200}
                                height={300}
                            />
                            <div className="pt-4" style={{ lineHeight: 0 }}>
                                <h5 className="fs-4 card-title fw-bold">{org.name}</h5>
                                <p className="fs-7 card-text fst-italic">{org.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default AboutUs;