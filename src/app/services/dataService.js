import config from '../config/config';

/**
 * dataService is a service using default promise library to make request to APIs
 */
const dataService = function(){
    //console.log('- config:', config);
    this.domain = config.domain;
    this.port = config.port;
    this.hostName = this.domain + ':' + this.port;
};

dataService.prototype.createReview = function(data){
    var self = this;
    var url = self.hostName + '/api/review/add';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(res){
        if(res.status !== 200) throw Error(res.statusText);
        return { status: true, body: res.body };
    })
    .catch(function(error){
        return { status: false, message: error};
    });
}

module.exports = new dataService();
