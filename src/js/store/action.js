import {createAction} from '@reduxjs/toolkit';


export const ActionType = {
    LOAD_QUOTES: `data/loadQuotes`,
    CONVERSATION_DATA: `data/conversationDate`,
    CLEAR_CONVERSATION_DATA: `data/clearConversationDate`,
};

const loadQuotes = createAction(ActionType.LOAD_QUOTES, (quotes) => {
    return {
        payload: quotes,
    };
});

const conversationDate = createAction(ActionType.CONVERSATION_DATA, (data) => {
    return {
        payload: data
    };
});

const clearConversationDate = createAction(ActionType.CLEAR_CONVERSATION_DATA, (data) => {
    return {
        payload: []
    };
});

export {
    loadQuotes,
    conversationDate,
    clearConversationDate
};
