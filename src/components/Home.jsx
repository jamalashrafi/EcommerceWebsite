import React, {useEffect, useState} from 'react';
import axios from "axios";


const Home = () => {
    const [list, setlist] = useState([]);

    useEffect(() => {
        let localStorageList = localStorage.getItem("productlist") !== null ? JSON.parse(localStorage.getItem("productlist")) : [];
        if(localStorageList === null || localStorageList.length < 1){
            setLocalStorage( arg => {
                let localStorageList = localStorage.getItem("productlist");
                setlist(JSON.parse(localStorageList));
            });
        }else{
            setlist(localStorageList);
        }
        
        }, []);

    //Function handles the api call after the firstset of data has been rendered
    const handleScroll = e => {
        let element = e.target;
        if(element.scrollHeight - element.scrollTop === element.clientHeight){   
            let ScrollCount = localStorage.getItem("ScrollCount");
            if(Number(ScrollCount) >= 2)
              return;
              setLocalStorage( arg => {
                let localStorageList = localStorage.getItem("productlist");
                setlist(JSON.parse(localStorageList));
                localStorage.setItem("ScrollCount", Number(ScrollCount) + 1);
            });              
        }                        
    }

    //handles add to favorites functionality
    const handleFavourite = item => {
        let localStorageList =  localStorage.getItem("productlist") !== null ? JSON.parse(localStorage.getItem("productlist")) : [];
        if(localStorageList !== null && localStorageList.length > 1){
             let newAr ; 
            newAr = localStorageList;
            var foundIndex = newAr.findIndex(x => x.sku === item.sku);
            let isFav = newAr[foundIndex]["isFav"];
            newAr[foundIndex]["isFav"] = !isFav;
            console.log("updatedListNewArry", newAr);
            document.getElementById(item.sku).style.backgroundColor = item["isFav"] ? "transparent" : "green";
            setlist(newAr);
             console.log("updatedList",localStorageList)
            localStorage.setItem("productlist", JSON.stringify(localStorageList));
           
        }
    }
        //utlilty function to call fnp api and update the local storage
            const setLocalStorage = callback => {
                let localStorageList = localStorage.getItem('productlist') !== null ? localStorage.getItem("productlist") : [];
                axios.get('http://www.mocky.io/v2/5ed68221340000480106dae9')
                .then(function (response) {
                    let responseData = response.data.map(item => {
                        item["isFav"] = false;
                        return item;
                    });
                    if(localStorageList === undefined || localStorageList.length < 1){
                        localStorage.setItem("productlist", JSON.stringify(responseData));
                        callback("done");
                        return;
                    }
                    localStorageList = [...JSON.parse(localStorageList), ...responseData];
                    localStorage.setItem("productlist", JSON.stringify(localStorageList));
                    callback("done");
                    return
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
            
   
    return (
        
        <div  >
            {list.length < 1 ?
                 <h1 data-testid="loadingData">Loading...</h1> :
            <div className="cardContainer" onScroll={handleScroll} >
                { list.map((item, pos) => (
                   
                   <div className = "card">
                       <div className = "iconImgContainer">
                            <span  onClick={()=>{handleFavourite(item)}}>
                                <i className={item["isFav"] ? "far fa-heart greenHeart align" : "far fa-heart align"} id={item.sku}></i>
                            </span>
                            <img src={item.imgSrc} key={pos} className="cardImg" alt="cardImg" />
                        </div>
                        <a id="landingPageLink" href={item.landingPage}>
                            <span className="cardTitle">{item.title}</span>
                            <span className="cardPrice">{item.sellingPrice}</span>
                            <div className="cardRatingsDiv">
                            <span className="cardRatings">{item.ratingCount}</span>
                            <span className="cardRatings">{item.reviewCount}</span>
                            </div>
                        </a>
                   </div>
                ))
                }
            </div>
        }
        </div>
    )
}

export default Home;
