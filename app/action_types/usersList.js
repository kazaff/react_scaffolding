import createAsyncActionsTypes from "./utils/create_async_actions_types";
import createSyncActionsTypes from "./utils/create_sync_actions_types";

const AsyncTypes = createAsyncActionsTypes([
  "USERSLIST", "USERSTATUS", "USERDELETE"
]);

const SyncTypes = createSyncActionsTypes([
  "USERSLIST_SEARCHKEY"
]);

export default {...AsyncTypes, ...SyncTypes};
