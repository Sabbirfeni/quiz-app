import React from "react";
import successImage from '../../assets/images/success copy.png';
import classes from './summary.module.css';
import useFetch from "../../hooks/useFetch";
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

export default function Summary({ score, noq }) {
  console.log('summery')
  const getKeyWord = () => {
    return (score / (noq * 5) * 100 < 50) ? 'failed' : 
    (score / (noq * 5) * 100 < 75) ? 'good' :
    (score / (noq * 5) * 100 < 100) ? 'very good' : 'excellent' 
  }
  const url = `https://api.pexels.com/v1/search?query=${getKeyWord()}&per_page=1`
  const { loading, error, errorMessage, result } = useFetch(url, 'GET', {
    Authorization: '8OEPsRN8OisvEnYTq0LVOamPhTMvDSomfLRhHJR9cSj6K1TFvE8vAmuX'
  })


  const image = result ? result?.photos[0].src.medium : successImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      
      {loading ? <Loader/> : error ? <Error errorMessage={errorMessage}/> : result.length === 0 ? <Error errorMessage={errorMessage}/> : 
      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
      }
    </div>
    );
}