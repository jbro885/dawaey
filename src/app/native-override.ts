export const messNative = (alertCtrl) => {
    window.alert = null;
    window.alert = (msg) => {
        console.warn(msg)
        if (!msg || msg.length === 0) return;
        const alert = alertCtrl.create({
            title: 'Info!',
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }
}