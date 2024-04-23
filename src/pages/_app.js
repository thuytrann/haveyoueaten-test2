import "@/styles/globals.css";
import Header from '@/components/Header';
import { TransitionProvider } from '@/context/TransitionContext'
import Transition from '@/components/Transition';
import Loading from '@/components/Loading';
import { MuteProvider } from '@/context/MuteContext';


export default function App({ Component, pageProps, router}) {
  //const location = useLocation(); 
  console.log(Component, pageProps, router);
  
  return (
    
<MuteProvider>
<TransitionProvider>
      <Loading />
      
      <Header location={router.pathname} {...pageProps}/> 
      <Transition>
        
        <Component key={router.route} {...pageProps} exact/>
      </Transition>
    </TransitionProvider>
    </MuteProvider>
    
    
    
  )
}
