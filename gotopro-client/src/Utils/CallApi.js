const BASE_URL = 'http://192.168.1.12:8000';

const CallApi = {
    getAllDuties: async () => {
        try{
            const result = await fetch( BASE_URL + '/duties' );
            const dataduties = await result.json();
            return dataduties;
        }catch(err){
            console.log( 'Data can not load: ' +err );
            return [];
        }
    },
    postDuty: async (body) => {
        //console.log(JSON.stringify(body));
        return fetchMethodData( '/duties', {
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    },
    deleteDuty: async (dutyId) => {
        return fetchMethodData( `/duties/${dutyId}`, {
            method: 'DELETE',
            header: {
                'accept':'application/json',
                'Content-Type': 'application/json',
            },
        });
    },
    updateDutyStatus: async ( dutyId, status ) => {
        console.log(`${dutyId} : ${status}`);
        return fetchMethodData( `/duties/${dutyId}?isComplete=${status}`, {
            method: 'PUT',
            header: {
                'accept':'application/json',
                'Content-Type': 'application/json',
            },
        });
    },

    updateDutyHistory: async ( body ) => {
        return fetchMethodData( '/history/add', {
                method: 'POST',
                headers: {
                    'accept':'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
        });
    },
    
    getHistoryDuty: async ( dutyId ) => {
        return fetchMethodData( `/history/detail/${dutyId}`, {
            method: 'GET',
            header: {
                'accept':'application/json',
                'Content-Type': 'application/json',
            },
        });
    },

    authUser: async ( body ) => {
        return fetchMethodData( '/user/login', {
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }); 
    },

    signupUser: async ( body ) => {
        return fetchMethodData( '/user/signup', {
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }); 
    },

    authUserMe: async ( token ) => {
        return fetchMethodData( '/user/me', {
            method: 'GET',
            headers: {
                'accept':'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token,
            }
        }); 
    },

    
    addNotiToken: async ( body, token ) => {
        return fetchMethodData( '/user/addnotitoken', {
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token,
            },
            body: JSON.stringify(body),
        });
    },
    

    // sendNotification: async ( message ) => {
    //     return fetchMethodDataFullPatch( 'https://exp.host/--/api/v2/push/send', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Accept-encoding': 'gzip, deflate',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(message),
    //     }); 
    // }

};

const fetchMethodData = ( path, options ) => {
    return fetch( BASE_URL + path, options )
        .then( (res) => res.json() )
        .catch( (err) => { console.log(err); } )
};

const fetchMethodDataFullPatch = ( path, options ) => {
    return fetch( path, options )
        .then( (res) => res.json() )
        .catch( (err) => { console.log(err); } )
};

module.exports = CallApi;