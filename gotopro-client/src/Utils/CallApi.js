const BASE_URL = 'http://192.168.1.6:8000';

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

};

const fetchMethodData = ( path, options ) => {
    return fetch( BASE_URL + path, options )
        .then( (res) => res.json() )
        .catch( (err) => { console.log(err); } )
};

module.exports = CallApi;