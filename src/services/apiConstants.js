/** @format */

const liveURL = "https://kuberfun.com/v1/admin/";
const socketLiveURL = "https://kuberfun.com";

export const localURL = "http://192.168.1.5:3006/v1/admin/";
const socketLocalURL = "http://192.168.1.5:3006";

// export const baseURL = liveURL;
export const baseURL = localURL;

export const socketURL = socketLocalURL;
// export const socketURL = socketLiveURL;

export const ApiURL = {
	register: "admin-register",
	login: "login",
	user_List: "user/index",
	user_delete: "user/delete",
	user_update: "user/update",
	game_request_List: "game/request",
	add_game: "game/store",
	withdrawal: "payment/withdrawal-list",
	game_List: "game/index",
	GameResult: "game/result",
	delete_Game: "game/delete",
	update_Game: "game/update",
	filter_game: "game/filter-game",
	update_wallet: "game/update-wallet",
	update_wallet_Admin: "payment/addmoney-wallet",
};
