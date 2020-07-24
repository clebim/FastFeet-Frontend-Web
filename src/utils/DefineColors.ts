export const DefineBackground = (status: string): string | undefined => {
  if (status === 'Entregue') {
    return '#DFF0DF'
  } else if (status === 'Pendente') {
    return '#F0F0DF'
  } else if (status === 'Retirada') {
    return '#BAD2FF'
  }

  return '#FAB0B0'
}

export const DefineColor = (status: string): string => {
  if (status === 'Entregue') {
    return '#2CA42B'
  } else if (status === 'Pendente') {
    return '#C1BC35'
  } else if (status === 'Retirada') {
    return '#4D85EE'
  }
  return '#DE3B3B'
}
