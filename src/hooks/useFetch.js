import axios from 'axios';
import {useEffect, useState} from 'react';

const useFetch = (url) => {
   const [data,setData]=useState([])
   const [loading,setLoading]=useState(false)
   const [error,setError]=useState(false)
   useEffect(()=>{
    const fetchData=async ()=>{
        setLoading(true);
        try{
            const result=await axios.get(url);
            setData(result.data)
        }catch(err){
            setError(err);
        }
        setLoading(false);
    }
    fetchData();
   },[url])
    const refetchData=async ()=>{
        setLoading(true);
        try{
            const result=await axios.get(url);
            setData(result.data)
        }catch(err){
            setError(err);
        }
        setLoading(false);
    }
    return {data,loading,error,refetchData}
};

export default useFetch;