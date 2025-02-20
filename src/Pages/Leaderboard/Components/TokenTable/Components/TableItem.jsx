import { useEffect, useState } from 'react';
import { MobileLeaderboardItem } from '../MobileLeaderboard';
import { LeaderboardItem } from '../LeaderBoardItem';
import TableHeader from './TableHeader';
import { useFilterContext } from '../../../../../Context/TableContext/Context';

const ResponsiveLeaderBoard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1375);
  const {data, headers} = useFilterContext();
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1375);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile ? (
        <div className='min-h-[500px]'>
          <table className='w-full '>
            <TableHeader headers={headers} />
            <tbody className='w-full'>
              {data.map((item, index) => (
                <LeaderboardItem {...item} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          {data.map((item, index) => (
            <MobileLeaderboardItem {...item} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default ResponsiveLeaderBoard;
