import React, { useEffect, Fragment } from "react";
import {useParams, Route, Routes} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import {getSingleQuote} from '../lib/api';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from '../hooks/use-http';

const QuoteDetail=()=>{
    const params=useParams()
    const {quoteId}=params
    const {sendRequest,status,data:loadedQuote,error}=useHttp(getSingleQuote,true);
    console.log(quoteId)
    useEffect(()=>{
        sendRequest(quoteId);
    },[sendRequest,quoteId])

    if(status==='pending'){
        return<div className="centered"><LoadingSpinner/></div>
    }

    if(error){
        return<div className="centered focused">{error}</div>
    }

    if(!loadedQuote.text){
        return<p>No Quote found!</p>
    }

    console.log(params)
    return(
        <div>
            <Fragment>
                <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
                <Routes>
                    <Route path="comments" element={<Comments/>}/>
                </Routes>
            </Fragment>
        </div>
    )
}

export default QuoteDetail;