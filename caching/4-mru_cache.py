#!/usr/bin/python3
""" MRU Caching """
BaseCaching = __import__('base_caching').BaseCaching


class MRUCache(BaseCaching):
    """ Defines the class LRUCache, a 'Most-Recently-Used' caching system,
        inheriting from BaseCaching.
    """
    def __init__(self):
        """ Initialize
        """
        super().__init__()
        self.queue = []

    def put(self, key, item):
        """ Add an item in the cache
        """
        if key is None or item is None:
            pass
        else:
            if len(self.cache_data) >= self.MAX_ITEMS:
                if key in self.cache_data.keys():
                    self.queue.remove(key)
                else:
                    first = self.queue.pop(-1)
                    del self.cache_data[first]
                    print(f"DISCARD: {first}")
            self.queue.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key
        """
        if key is None or key not in self.cache_data.keys():
            return None
        else:
            self.queue.remove(key)
            self.queue.append(key)
            return self.cache_data[key]
