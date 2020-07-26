export const SetStatus = (start_date: Date | null, end_date: Date | null, canceled_at: Date | null): string | undefined => {
  if(canceled_at) {
    return 'Cancelada'
  }
  else if(start_date && end_date) {
    return 'Entregue'
  }
  else if(start_date && !end_date) {
    return 'Retirada'
  }
  else if(!start_date && !end_date){
    return 'Pendente'
  }
}