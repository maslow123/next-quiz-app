import Image from "next/image";
import { useRouter } from "next/router";
import { Layout } from "../../components/common";
import { images, myLoader } from "../../utils";

function AboutUs(props) {
    const router = useRouter();
    const organizations = [
        {
            photo: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1664351577~exp=1664352177~hmac=432a748a9df2741fe4d601bf3ef9b98289e49429c78c9c431651aa23a022ab04',
            name: 'Mikasa Uzumaki Naruto',
            role: '201011400094'
        },                                
        {
            photo: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1664351577~exp=1664352177~hmac=432a748a9df2741fe4d601bf3ef9b98289e49429c78c9c431651aa23a022ab04',
            name: 'Bang Sapri',
            role: '201011400094'
        },
        {
            photo: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1664351577~exp=1664352177~hmac=432a748a9df2741fe4d601bf3ef9b98289e49429c78c9c431651aa23a022ab04',
            name: 'Mbo Darmi',
            role: '201011400094'
        },
        {
            photo: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1664351577~exp=1664352177~hmac=432a748a9df2741fe4d601bf3ef9b98289e49429c78c9c431651aa23a022ab04',
            name: 'Mikasa Uzumaki Naruto',
            role: '201011400094'
        },                                
        {
            photo: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1664351577~exp=1664352177~hmac=432a748a9df2741fe4d601bf3ef9b98289e49429c78c9c431651aa23a022ab04',
            name: 'Bang Sapri',
            role: '201011400094'
        },
        {
            photo: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1664351577~exp=1664352177~hmac=432a748a9df2741fe4d601bf3ef9b98289e49429c78c9c431651aa23a022ab04',
            name: 'Mbo Darmi',
            role: '201011400094'
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
                    <div className="heading fs-1 fw-bold lh-sm">
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