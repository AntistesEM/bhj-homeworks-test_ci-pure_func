export default function pureFunctions(value) {
  if (value >= 50) {
    return 'healthy';
  }
  if (value >= 15 && value < 50) {
    return 'wounded';
  }
  if (value < 15) {
    return 'critical';
  }
  return 'Что-то пошло не так';
}
