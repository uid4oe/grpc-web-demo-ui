/**
 * @fileoverview gRPC-Web generated client stub for orderpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.orderpb = require('./order_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.orderpb.OrderClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.orderpb.OrderPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.orderpb.CreateOrderRequest,
 *   !proto.orderpb.CreateOrderResponse>}
 */
const methodDescriptor_Order_CreateOrder = new grpc.web.MethodDescriptor(
  '/orderpb.Order/CreateOrder',
  grpc.web.MethodType.UNARY,
  proto.orderpb.CreateOrderRequest,
  proto.orderpb.CreateOrderResponse,
  /**
   * @param {!proto.orderpb.CreateOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.orderpb.CreateOrderResponse.deserializeBinary
);


/**
 * @param {!proto.orderpb.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.orderpb.CreateOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.orderpb.CreateOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.orderpb.OrderClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/orderpb.Order/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_Order_CreateOrder,
      callback);
};


/**
 * @param {!proto.orderpb.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.orderpb.CreateOrderResponse>}
 *     Promise that resolves to the response
 */
proto.orderpb.OrderPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/orderpb.Order/CreateOrder',
      request,
      metadata || {},
      methodDescriptor_Order_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.orderpb.GetOrderDetailsRequest,
 *   !proto.orderpb.GetOrderDetailsResponse>}
 */
const methodDescriptor_Order_GetOrderDetailStream = new grpc.web.MethodDescriptor(
  '/orderpb.Order/GetOrderDetailStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.orderpb.GetOrderDetailsRequest,
  proto.orderpb.GetOrderDetailsResponse,
  /**
   * @param {!proto.orderpb.GetOrderDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.orderpb.GetOrderDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.orderpb.GetOrderDetailsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.orderpb.GetOrderDetailsResponse>}
 *     The XHR Node Readable Stream
 */
proto.orderpb.OrderClient.prototype.getOrderDetailStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/orderpb.Order/GetOrderDetailStream',
      request,
      metadata || {},
      methodDescriptor_Order_GetOrderDetailStream);
};


/**
 * @param {!proto.orderpb.GetOrderDetailsRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.orderpb.GetOrderDetailsResponse>}
 *     The XHR Node Readable Stream
 */
proto.orderpb.OrderPromiseClient.prototype.getOrderDetailStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/orderpb.Order/GetOrderDetailStream',
      request,
      metadata || {},
      methodDescriptor_Order_GetOrderDetailStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.orderpb.HandleOrderCompletionRequest,
 *   !proto.orderpb.HandleOrderCompletionResponse>}
 */
const methodDescriptor_Order_HandleOrderCompletion = new grpc.web.MethodDescriptor(
  '/orderpb.Order/HandleOrderCompletion',
  grpc.web.MethodType.UNARY,
  proto.orderpb.HandleOrderCompletionRequest,
  proto.orderpb.HandleOrderCompletionResponse,
  /**
   * @param {!proto.orderpb.HandleOrderCompletionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.orderpb.HandleOrderCompletionResponse.deserializeBinary
);


/**
 * @param {!proto.orderpb.HandleOrderCompletionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.orderpb.HandleOrderCompletionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.orderpb.HandleOrderCompletionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.orderpb.OrderClient.prototype.handleOrderCompletion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/orderpb.Order/HandleOrderCompletion',
      request,
      metadata || {},
      methodDescriptor_Order_HandleOrderCompletion,
      callback);
};


/**
 * @param {!proto.orderpb.HandleOrderCompletionRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.orderpb.HandleOrderCompletionResponse>}
 *     Promise that resolves to the response
 */
proto.orderpb.OrderPromiseClient.prototype.handleOrderCompletion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/orderpb.Order/HandleOrderCompletion',
      request,
      metadata || {},
      methodDescriptor_Order_HandleOrderCompletion);
};


module.exports = proto.orderpb;

