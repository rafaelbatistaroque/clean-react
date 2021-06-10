import { HttpPostParams } from "@/shared/types";
import axios from "axios";

export class HttpAxiosServico {
	async post(params: HttpPostParams<any>): Promise<void> {
		axios.post(params.url);
	}
}
