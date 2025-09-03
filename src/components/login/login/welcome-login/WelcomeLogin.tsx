import { useContext } from 'react';
import { WelcomePage } from './welcome-page/WelcomePage';
import { ContextMaster } from '@/context/ContextProvider';
import { allPages } from '@/data/previewData';
import { EndInteraction } from './end-interaction/EndInteraction';

export const WelcomeLogin = () => {
  const { currentPage } = useContext(ContextMaster);
  return <>
    {allPages.map((page, id) => {
      if(currentPage == id){
        const lastPage = allPages.length - 1 == id;
        return <WelcomePage key={id} strs={page} isLastPage={lastPage}/>
      }
    })}
    {currentPage == allPages.length && <EndInteraction/>}
  </>
}