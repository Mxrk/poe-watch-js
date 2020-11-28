const axios = require('axios')

class PoeWatch {
    constructor(config) {
      this.basePath = "https://api.poe.watch/"
    }

    async getCategories(){
       let res = await axios.get(this.basePath + "categories");
       return res.data
    }

    getRequest(endpoint, league){
        return axios.get(this.basePath + "get?category=" + endpoint + "&league=" + league)
    }

    async getLatestStashID(){
        let res = await axios.get(this.basePath  +"status")
        return res.data.changeID
    }

    getWeapons(league){
       return this.getRequest("weapon", league)
    }

    getArmours(league){
        return this.getRequest("armour", league)
    }
    
    getCards(league){
        return this.getRequest("card", league)
    }

    getCurrency(league){
        return this.getRequest("currency", league)
    }

    getEnchants(id, league){
        return axios.get(this.basePath + "enchants?id=" + id + "&league=" + league)
    }

    getCompact(league){
        return axios.get(this.basePath + "compact?league=" + league)
    }

    getHistory(id, league){
        return axios.get(this.basePath + "history?id=" + id + "&league=" + league)
    }

    getActiveLeagues(){
        return axios.get(this.basePath + "leagues")
    }

    getAllLeagues(){
        return axios.get(this.basePath + "allLeagues")
    }
  }

  module.exports = PoeWatch;
  