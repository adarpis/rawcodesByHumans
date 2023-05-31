function gotoHell(n) {
  n++;
  try {
    if (n < Infinity) {
      getOutHell(n);
    } else {
      delete yourself;
      return -1;
    }
  } catch (err) {
    delete yourself;
    return -1;
  }
  gotoHell(n)
}
