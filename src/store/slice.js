import { DECREMENT, INCREMENT, RESET } from "./type";

function globalReduce(state, action) {
        switch (action.type) {
                case INCREMENT:
                        return {
                                count: state.count + 1,
                        };
                case DECREMENT:
                        return {
                                count: state.count - 1,
                        };        
                case RESET:
                        return {
                                count: (state.count = 0),
                        };
                default:
                        console.log("Error");
        }
}

export default globalReduce