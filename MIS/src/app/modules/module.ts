export default class Module 
{
    public name: String = null;
    public code: String = null;
    public blok: Number = null;
    public EC: Number = null;
    public omschrijving: String = null;
    public jaar: String = null;

    constructor(data: any){
        Object.assign(this, data); //waarom moeilijk doen als het makkelijk kan!
    }
}