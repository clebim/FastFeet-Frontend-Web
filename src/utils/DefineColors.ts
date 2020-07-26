export const DefineBackground = (status: string | undefined): string | undefined => {
  if (status === 'Entregue') {
    return '#DFF0DF'
  } else if (status === 'Pendente') {
    return '#F0F0DF'
  } else if (status === 'Retirada') {
    return '#BAD2FF'
  } else if (status === 'Cancelada') {
    return '#FAB0B0'
  }
}

export const DefineColor = (status: string | undefined ): string | undefined => {
  if (status === 'Entregue') {
    return '#2CA42B'
  } else if (status === 'Pendente') {
    return '#C1BC35'
  } else if (status === 'Retirada') {
    return '#4D85EE'
  } else if (status === 'Cancelada') {
    return '#DE3B3B'
  }
}
