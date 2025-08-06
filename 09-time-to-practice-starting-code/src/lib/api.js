const FIREBASE_DOMAIN=`https://routing-project-8a2f4-default-rtdb.firebaseio.com`;
export async function getAllQuotes(){
    const response = await fetch(`${FIREBASE_DOMAIN}/quotess.json`);
    const data=await response.json();

    if(!response.ok){
        throw new Error(data.message || 'could not fetch quotes!')
    }

    const transformedQuotes=[];
    for(const key in data){
        const quoteObj={
            id:key,
            ...data[key]
        }
        transformedQuotes.push(quoteObj)
    }
    return transformedQuotes
}

export async function getSingleQuote(quoteId){
    const response=await fetch(`${FIREBASE_DOMAIN}/quotess/${quoteId}.json`);
    const data=await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Could not fetch the quote!')
    }
    const loadedQuote={
        id:quoteId,
        ...data
    }
    return loadedQuote
}

export async function addQuote(quoteData){
    const response=await fetch(`${FIREBASE_DOMAIN}/quotess.json`,{
        method:'POST',
        body: JSON.stringify(quoteData),
        header:{
            'content-type':'application/json'
        }
    });

    const data=await response.json();
    if(!response.ok){
        throw new Error(data.message || 'Could not create a quote!')
    }
    return null
}

export async function addComment(commentData, quoteId){
    const response= await fetch(`${FIREBASE_DOMAIN}//comments/${quoteId}/.json`,{
        method:'POST',
        body:JSON.stringify(commentData),
        header:{
            'Content-type': 'application/json'
        }
    });
    const data=await response.json();

    if(!response.ok){
        throw new Error(data.message|| 'could not add a comment')
    }
    return{CommentId:data.name}
}

export async function getAllComments(quoteId){
    const response=await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}/.json`)
    const data=await response.json();

    if(!response.ok){
        throw new Error(data.message||'could not fetch comments!')
    }

    const transformedComments=[];
    for(const key in data){
        const commentObj={
            id:key,
            ...data[key]
        }
        transformedComments.push(commentObj)
    }
    return transformedComments
}