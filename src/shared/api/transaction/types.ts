export interface Transaction {
  id: number,
  amount: number,
  createAt: string,
  description: string,
  receiverId: number,
  senderId: number,
}