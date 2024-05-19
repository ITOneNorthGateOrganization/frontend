export interface Transaction {
  id: number,
  amount: number,
  createdAt: Date,
  description: string,
  receiverId: number,
  senderId: number,
  transactionTypeId: number
}