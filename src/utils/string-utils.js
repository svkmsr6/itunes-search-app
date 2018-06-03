// import _ from 'lodash';

const stringUtils = () => console.log('Welcome');

export default stringUtils;

export const formatTitle = title => {
    // const trackNameArray = title.split('-')[0].split(' ');
    // let result = trackNameArray[0];
    // if(trackNameArray[1]) {
    //     result = [trackNameArray[0], trackNameArray[1]].join(' ');
    // }
    // return [result,title.split('-')[1]].join('-');
    return title;
}
