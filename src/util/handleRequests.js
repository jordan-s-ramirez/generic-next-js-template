export function handleRequests(req) {
  try {
    let data = req();
    return [data, null];
  } catch (Exception) {
    return [null, Exception];
  }
}
