export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    if (!email || email.length <= 0) return "Email không thể để trống"
    if (!re.test(email)) return 'Ooops! Địa chỉ email không hợp lệ'
    return ''
  }
  