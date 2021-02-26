// Dependency inversion principle

/*

	One should "depend upon abstractions, [not] concretions."

 */

class XmlHttpRequestService {
	open() { /* ... */ }
	send() { /* ... */ }
}

interface Connection {
	request(url: string, option: any): any
}

class XmlHttpService implements Connection {
	xhr = new XmlHttpRequestService()

	request(url: string, type: string) {
		this.xhr.open()
		this.xhr.send()
	}
}

class Http {
	constructor(private XmlHttpConnection: Connection) { /* ... */ }

	get(url: string, options: any) {
		this.XmlHttpConnection.request(url, "GET")
	}

	post(url: string) {
		this.XmlHttpConnection.request(url, "POST")
	}
}
