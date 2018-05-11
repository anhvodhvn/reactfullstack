import axios from 'axios';
import config from '../config/config';

/**
 * axiosService is a factory using axios library to make request to APIs
 */
const axiosService = function(){
    //console.log('- config:', config);
    this.domain = config.domain;
    this.port = config.port;
    this.hostName = this.domain + ':' + this.port;
};

/** basic methods */
axiosService.prototype.get = function(url){
    return axios.get(this.hostName + url);
}

axiosService.prototype.post = function(url, data){
    return axios.post(this.hostName + url, { 
        method: 'POST',
        body: JSON.stringify(data)
    });
}


/** extend business methods */
axiosService.prototype.getProducts = function(){
    return this.get('/api/product/fe/items')
    .then(function(res) {
        return res.data;
    })
    .catch(function(err){
        return err;
    });
}

axiosService.prototype.getNewFeed = function(){
    return this.get('/api/newsfeed')
    .then(function(res) {
        return res.data;
    })
    .catch(function(err){
        return err;
    });
}

module.exports = new axiosService();