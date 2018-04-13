/**
 * Created by yangyankang on 2018.04.10.
 */
const DATA_NAME = 'input_data';
export default {
  fetch (){
    return JSON.parse(window.sessionStorage.getItem(DATA_NAME)||'[]');
  },
  save (items) {
    return localStorage.setItem(DATA_NAME, JSON.stringify(items));
  }
}
