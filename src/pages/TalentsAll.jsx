import React, { useEffect, useState } from 'react';
import "../style/styleTalentAll.scss";
import useOnClick from '../funtions/useOnClick';
import { useDispatch, useSelector } from 'react-redux';
import { listTalents } from '../redux/actions/talentActions';

const TalentsAll = () => {

    const handleClick = useOnClick();
    const dispatch = useDispatch();
    const talentsList = useSelector((store) => store.talents.talents);
    const [listaDeTalentos, setListaDeTalentos] = useState([]);


    // console.log("informacion de talents: ", talents);
    const getTalents = () => {
        dispatch(listTalents());
    }

    useEffect(() => {
        getTalents();

    }, []);

    useEffect(() => {
        setListaDeTalentos(talentsList);

        console.log(listaDeTalentos);
    }, [talentsList]);

    return (
        <>


<main>
        {talentsList?.map((talent, index) => {
         return <div className='talentsAll__container'
         key={index}
         onClick={() => handleClick("cardTalent", "")}
     >
         <div className='talentsAll__container-imgTalent'>
             <figure className='talentsAll__card-figure'>
                 <img src={talent.avatar} alt="imgTalent" />
             </figure>
         </div>
         <div className='talentsAll__container-info'>
             <div className='talentsAll__container-state'>
                 {/* <figure className='talentsAll__buttons-state'>
                     <img src={imgWhatsapp} alt="" />
                 </figure> */}
                 <div className='talentsAll__container-levelEnglish'>
                     <span className='talentsAll__know'>Ingles</span>
                     <span className='talentsAll__know'>{talent.englishLevel}</span>
                 </div>
             </div>
             <div className='talentsAll__line'></div>
             <div className='talentsAll__container-infoPnal'>
                 <span className='talentsAll__name'><strong>{talent.firstName}</strong></span>
                 <span className='talentsAll__lastName'><strong>{talent.lastName}</strong></span>
                 <span className='talentsAll__know'>{talent.rol}</span>
             </div>
         </div>
     </div>
        })
        }
      </main>

        </>
    )
}

export default TalentsAll