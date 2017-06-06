/**
 * Created by wangyefeng on 2017-06-06 15:44
 */

import React from 'react'
import './loading.css'
import './toast.css'


const ToastObj = {
  message: '',
  show: false,
}
const ToastManager = {
  message: ToastObj.message,
  show: ToastObj.show,
  showToast: (sh, mes) => {
    ToastObj.message = mes
    ToastObj.show = sh
  },
}

class Toast extends React.Component {
  static propTypes = {
    manager: React.PropTypes.obj,
  }
  static defaultProps = {
    toastFunc: {},
    manager: ToastObj,
  }
  render() {
    const clazzName = this.props.manager.show ? 'toastAnimate toast-wrap toast-msg' : 'toast-wrap'
    return (
      <div className="toast-background">
        <div className={clazzName}>
          {this.props.manager.message}
        </div>
      </div>
    )
  }
}


export { Toast, ToastManager }
