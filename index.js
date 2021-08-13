export function seccess(data) {
  return { status: "seccess", data };
}

export function fail(data) {
  return { status: "fail", data };
}

export function error(error) {
  return { status: "error", error };
}
