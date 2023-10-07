import moment from 'moment';

function messageFormat(username, msg) {
    return {
        username, text: msg, time: moment().format("LT")
    };
}

export default messageFormat;