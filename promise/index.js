class Vendor 
{
    #itemlist
    #noitemCallback
    #itemCallback
    set noItemCallback(value)
    {   
        this.#noitemCallback = value

    } 
    set itemCallback(value)
    {
        this.#itemCallback = value
    }
    constructor(itemList)
    {
        this.#itemlist = itemList
    }

    sellSomething()
    {
        if(this.#itemlist.length === 0)
        {
            this.#noitemCallback("nincs eladni valü termek")
        }
        else
        {
            this.#itemCallback(this.#itemlist.pop())
        }
    }

    sellSomethingPromise()
    {
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(this.#itemlist.length === 0)
            {
                this.#noitemCallback("nincs eladni valü termek")
            }
            else
            {
                this.#itemCallback(this.#itemlist.pop())
            }
            }, 1000)
        })
    }
}

class Client 
{
    /**
     * @type {Vendor}
     */
    #vendor
    constructor(vendor)
    {
        this.#vendor = vendor
        this.#vendor.itemCallback = (element) => {
            console.log(`a kliens vett egy ${element}`)
        }
        this.#vendor.noItemCallback = (reason) => {
            console.log(`a kliens vett egy semmit me: ${reason}`)
        }
    }
    buyFromSeller(){
        this.#vendor.sellSomething()
    }
    buyFromSellerPromiseHandling()
    {
        this.#vendor.sellSomethingPromise().then((element) =>{
            console.log(`a kliens vett egy element ${element}`)
        }).catch((reason) => {
            console.log(`a kliens nem vett ok: ${reason}`)
        }).finally(()=> {
            console.log("vasaroltunk")
        })
()    }
}

const vendor = new Vendor(["krum"])
const client = new Client(vendor)
 // client.buyFromSeller()
client.buyFromSellerPromiseHandling()
client.buyFromSellerPromiseHandling()

