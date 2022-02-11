/**
 * @fileoverview gRPC-Web generated client stub for catalogpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.catalogpb = require('./catalog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.catalogpb.CatalogClient =
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
proto.catalogpb.CatalogPromiseClient =
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
 *   !proto.catalogpb.GetItemRequest,
 *   !proto.catalogpb.GetItemResponse>}
 */
const methodDescriptor_Catalog_GetItem = new grpc.web.MethodDescriptor(
  '/catalogpb.Catalog/GetItem',
  grpc.web.MethodType.UNARY,
  proto.catalogpb.GetItemRequest,
  proto.catalogpb.GetItemResponse,
  /**
   * @param {!proto.catalogpb.GetItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.catalogpb.GetItemResponse.deserializeBinary
);


/**
 * @param {!proto.catalogpb.GetItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.catalogpb.GetItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.catalogpb.GetItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.catalogpb.CatalogClient.prototype.getItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/catalogpb.Catalog/GetItem',
      request,
      metadata || {},
      methodDescriptor_Catalog_GetItem,
      callback);
};


/**
 * @param {!proto.catalogpb.GetItemRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.catalogpb.GetItemResponse>}
 *     Promise that resolves to the response
 */
proto.catalogpb.CatalogPromiseClient.prototype.getItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/catalogpb.Catalog/GetItem',
      request,
      metadata || {},
      methodDescriptor_Catalog_GetItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.catalogpb.GetItemsRequest,
 *   !proto.catalogpb.GetItemsResponse>}
 */
const methodDescriptor_Catalog_GetItems = new grpc.web.MethodDescriptor(
  '/catalogpb.Catalog/GetItems',
  grpc.web.MethodType.UNARY,
  proto.catalogpb.GetItemsRequest,
  proto.catalogpb.GetItemsResponse,
  /**
   * @param {!proto.catalogpb.GetItemsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.catalogpb.GetItemsResponse.deserializeBinary
);


/**
 * @param {!proto.catalogpb.GetItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.catalogpb.GetItemsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.catalogpb.GetItemsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.catalogpb.CatalogClient.prototype.getItems =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/catalogpb.Catalog/GetItems',
      request,
      metadata || {},
      methodDescriptor_Catalog_GetItems,
      callback);
};


/**
 * @param {!proto.catalogpb.GetItemsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.catalogpb.GetItemsResponse>}
 *     Promise that resolves to the response
 */
proto.catalogpb.CatalogPromiseClient.prototype.getItems =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/catalogpb.Catalog/GetItems',
      request,
      metadata || {},
      methodDescriptor_Catalog_GetItems);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.catalogpb.UpdateItemRequest,
 *   !proto.catalogpb.UpdateItemResponse>}
 */
const methodDescriptor_Catalog_UpdateItem = new grpc.web.MethodDescriptor(
  '/catalogpb.Catalog/UpdateItem',
  grpc.web.MethodType.UNARY,
  proto.catalogpb.UpdateItemRequest,
  proto.catalogpb.UpdateItemResponse,
  /**
   * @param {!proto.catalogpb.UpdateItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.catalogpb.UpdateItemResponse.deserializeBinary
);


/**
 * @param {!proto.catalogpb.UpdateItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.catalogpb.UpdateItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.catalogpb.UpdateItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.catalogpb.CatalogClient.prototype.updateItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/catalogpb.Catalog/UpdateItem',
      request,
      metadata || {},
      methodDescriptor_Catalog_UpdateItem,
      callback);
};


/**
 * @param {!proto.catalogpb.UpdateItemRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.catalogpb.UpdateItemResponse>}
 *     Promise that resolves to the response
 */
proto.catalogpb.CatalogPromiseClient.prototype.updateItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/catalogpb.Catalog/UpdateItem',
      request,
      metadata || {},
      methodDescriptor_Catalog_UpdateItem);
};


module.exports = proto.catalogpb;

