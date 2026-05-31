const productCenderConfig = { serverId: 4653, active: true };

const productCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4653() {
    return productCenderConfig.active ? "OK" : "ERR";
}

console.log("Module productCender loaded successfully.");