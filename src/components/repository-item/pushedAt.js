import React from "react";
import * as S from "./styled";

    function timeConverter(UNIX_timestamp){
        //this code helps in converting unix timestamp into date.
        const a = new Date(UNIX_timestamp );//* 1000 to run in seconds. Leave it as is for unix timestamps in milliseconds
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();
        const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        const timeString = `on ${month} ${date}`;
        
        return timeString;
    }
    
    //now I need the difference between the two dates: today and the date it was last pushed
    const DateDiference = (pushedAt) =>{
            const today = Date.now();
            const time = new Date(pushedAt).getTime();
            
            return today - time;
    }
    
    const UpdatedAtString = (pushedAt) =>{ 

        const difference = DateDiference(pushedAt);
        /*
        the time is given in milliseconds. to get:
         seconds = difference / 1000
         minutes = seconds / 60
         hours =  minutes / 60
         days = hours / 24
        */
        const seconds = difference / 1000;
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        let updatedText = '';
        if(days >= 30){
            updatedText = timeConverter(pushedAt);            
        }else if(hours >= 24){
            const roundDays = Math.round(days);
            updatedText = `${roundDays} ${roundDays > 1? 'days':'day'} ago`;    
        }else if(minutes >= 60){
            const roundHours = Math.round(hours);
            updatedText = `${roundHours} ${roundHours > 1? 'hours':'hour'} ago`;   
        }else if(seconds >= 60){
            const roundMinutes = Math.round(minutes);
            updatedText = `${roundMinutes} ${roundMinutes > 1? 'minute':'minutes'} ago`;   
        }else if(minutes < 60){
            updatedText = `now`;   
        }

        return `Updated ${updatedText}`;
  }

const PushedAt = ({pushed_at}) =>{
    const time = new Date(pushed_at).getTime();
    const pushedAtString = UpdatedAtString(pushed_at);
 
    return(
        <>{pushedAtString}</>
    )
}

export default PushedAt;
