searchNodes=[{"doc":"Client for Sonic search backend","ref":"SonicClient.html","title":"SonicClient","type":"module"},{"doc":"","ref":"SonicClient.html#consolidate/1","title":"SonicClient.consolidate/1","type":"function"},{"doc":"","ref":"SonicClient.html#count/2","title":"SonicClient.count/2","type":"function"},{"doc":"","ref":"SonicClient.html#flush/2","title":"SonicClient.flush/2","type":"function"},{"doc":"Send PING message to Sonic serveriex&gt; {:ok, conn} = SonicClient.start(127.0.0.1, 1491, &quot;search&quot;) iex&gt; {:ok, conn} = SonicClient.ping(conn) PONG","ref":"SonicClient.html#ping/1","title":"SonicClient.ping/1","type":"function"},{"doc":"","ref":"SonicClient.html#push/4","title":"SonicClient.push/4","type":"function"},{"doc":"Start Connection with Sonic Server.Examplesiex&gt; SonicClient.start(127.0.0.1, 1491, &quot;search&quot;, &quot;secret&quot;) {:ok, conn}","ref":"SonicClient.html#start/4","title":"SonicClient.start/4","type":"function"},{"doc":"Stop connection with Sonic server","ref":"SonicClient.html#stop/1","title":"SonicClient.stop/1","type":"function"},{"doc":"","ref":"SonicClient.Modes.Control.html","title":"SonicClient.Modes.Control","type":"module"},{"doc":"","ref":"SonicClient.Modes.Control.html#consolidate/1","title":"SonicClient.Modes.Control.consolidate/1","type":"function"},{"doc":"","ref":"SonicClient.Modes.Ingest.html","title":"SonicClient.Modes.Ingest","type":"module"},{"doc":"","ref":"SonicClient.Modes.Ingest.html#count/2","title":"SonicClient.Modes.Ingest.count/2","type":"function"},{"doc":"","ref":"SonicClient.Modes.Ingest.html#flush/2","title":"SonicClient.Modes.Ingest.flush/2","type":"function"},{"doc":"","ref":"SonicClient.Modes.Ingest.html#push/4","title":"SonicClient.Modes.Ingest.push/4","type":"function"},{"doc":"This is the TcpConnection module, responsible to send and receive calls.","ref":"SonicClient.TcpConnection.html","title":"SonicClient.TcpConnection","type":"module"},{"doc":"","ref":"SonicClient.TcpConnection.html#close/1","title":"SonicClient.TcpConnection.close/1","type":"function"},{"doc":"Receives message from the tcp server.Returns {:ok, response}.Examples.TcpConnection.recv(conn) {:ok, &#39;CONNECTED &lt;sonic-server v1.3.0&gt;'}","ref":"SonicClient.TcpConnection.html#recv/3","title":"SonicClient.TcpConnection.recv/3","type":"function"},{"doc":"Sends a message to the tcp server.Returns :ok.Examples.TcpConnection.send(conn, &quot;start search password&quot;) :ok","ref":"SonicClient.TcpConnection.html#send/2","title":"SonicClient.TcpConnection.send/2","type":"function"},{"doc":"Starts connection with the tcp server.Returns {:ok, conn}.ExamplesSonicClient.TcpConnection.start_link(127.0.0.1, 1491, []) {:ok, #PID&lt;0.198.0&gt;}","ref":"SonicClient.TcpConnection.html#start_link/4","title":"SonicClient.TcpConnection.start_link/4","type":"function"}]