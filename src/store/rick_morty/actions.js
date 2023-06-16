/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable quotes */
import { api } from '../../boot/axios';
export async function fetchData(context) {
  try {
    const data = await api.get();
    console.log('data', data.data);
    context.commit('setData', data.data);
  } catch (err) {
    alert(error);
    console.log(error);
  }
}
export function updateData(context, data) {
  context.commit('setData', data);
}
