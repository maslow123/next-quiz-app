import styles from '../styles/Home.module.css'
import { Layout } from "../components/common";
import { Card } from '../components/ui';
import { useAuth } from '../context/auth';
import { useRouter } from 'next/router';
import { notify, playSound, sounds } from '../utils';

export default function Home() {
  const ctx = useAuth();
  const router = useRouter();

  const addHours = (numOfHours, date = new Date()) => {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    return date;
  }

  const onSubmit = () => {    
    if (!ctx.user) {
      playSound(sounds.answer.wrong);
      notify('error', 'Ada yang salah nih', 'Kamu harus isi nama kelompok dulu ya supaya bisa mulai permainannya');
      return
    }

    playSound(sounds.commonButton);

    const user = ctx.user;
    const sessionTime = addHours(1);
    // save to localStorage  
    localStorage.setItem('user', user);
    localStorage.setItem('sessionTime', sessionTime.getTime());
    // redirect to landing
    router.push('/landing');

  };
  return (
    <Layout>
      <div className={styles.container}>
        <div className="col-md-4 text-center">
          <label className="h2 bold">Nama kelompok:</label>
          <textarea 
            className="form-control"
            onChange={e => ctx.setUser(e.target.value)}
            style={{ fontSize: 30, textTransform: 'uppercase', textAlign: 'center' }}
          />
          <div className="mt-4">
            <Card 
              text="SIMPAN" 
              fontSize={20}
              style={{ cursor: 'pointer' }}
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
