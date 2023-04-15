import { App } from '@/app';
import { ValidateEnv } from '@utils/validateEnv';
import { IndexRoute } from "@routes/index.route";
import { Socket } from "@socket/socket";

ValidateEnv();

const app = new App([new IndexRoute()]);
const socket = new Socket();

app.listen();
socket.listen();
