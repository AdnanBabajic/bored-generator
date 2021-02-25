import axios from 'axios'

export default function getActivities() {
    return axios.get('https://www.boredapi.com/api/activity');
}